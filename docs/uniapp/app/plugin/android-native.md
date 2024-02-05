# 第二十三集 安卓原生插件开发示例——后台保活

###  一、开发环境

- JAVA环境 jdk1.8
- Android Studio 下载地址：[Android Studio官网](https://developer.android.google.cn/studio/index.html) OR [Android Studio中文社区](http://www.android-studio.org/)
- App离线SDK下载：请下载2.9.8+版本的[android平台SDK](https://nativesupport.dcloud.net.cn/AppDocs/download/android)
- HBuilderX 下载地址：[官方下载地址](https://www.dcloud.io/hbuilderx.html)

### 二、导入官方原生项目

- UniPlugin-Hello-AS工程请在[App离线SDK](https://nativesupport.dcloud.net.cn/AppDocs/download/android)中查找

  ![](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/202305051758834.png)

- 导入选择UniPlugin-Hello-AS工程，点击OK! 等待工程导入完毕。

![](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/202305051758779.png)

- 删除不必要的官方案例

![image-20230505182546432](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/202305051825798.png)

- 新建插件模块，名字自取

![image-20230505183830103](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/202305051838308.png)

![image-20230505183959044](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/202305051839159.png)

- 修改文件

![image-20230505184917736](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/202305051849790.png)

```java
apply plugin: 'com.android.library'

android {
    compileSdkVersion 33
    defaultConfig {
        minSdkVersion 21
        targetSdkVersion 33
        testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }

}

//导入aar需要的配置
repositories {
    flatDir {
        dirs 'libs'
    }
}

dependencies {
    compileOnly fileTree(dir: 'libs', include: ['*.jar'])
    //必须添加的依赖
    compileOnly fileTree(dir: '../app/libs', include: ['uniapp-v8-release.aar'])
    compileOnly 'androidx.recyclerview:recyclerview:1.0.0'
    compileOnly 'androidx.legacy:legacy-support-v4:1.0.0'
    compileOnly 'androidx.appcompat:appcompat:1.0.0'
    implementation 'com.alibaba:fastjson:1.2.83'
    implementation "androidx.work:work-runtime:2.8.1"
}
```

- 修改插件模块AndroidManifest.xml,保证  2 和 3 名字一致

![image-20230505185816618](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/202305051858711.png)

- OnePxActivity.java(Activity 1像素保活)

```java
public class OnePxActivity  extends AppCompatActivity {

    private static final String TAG = OnePxActivity.class.getSimpleName();

    private BroadcastReceiver br;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Window window = getWindow();
        window.setGravity(Gravity.LEFT | Gravity.TOP);
        WindowManager.LayoutParams params = window.getAttributes();
        params.x = 0;
        params.y = 0;
        params.height = 1;
        params.width = 1;
        window.setAttributes(params);
        //结束该页面的广播
        br = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                Log.d(TAG,"OnepxActivity finish   ================");
                finish();
            }
        };
        registerReceiver(br, new IntentFilter("finish activity"));

        //检查屏幕状态
        checkScreenOn("onCreate");
    }

    /**
     * 检查屏幕状态  isScreenOn为true  屏幕“亮”结束该Activity
     * */
    private void checkScreenOn(String methodName) {
        Log.d(TAG,"from call method: " + methodName);
        PowerManager pm = (PowerManager) OnePxActivity.this.getSystemService(Context.POWER_SERVICE);
        boolean isScreenOn = pm.isScreenOn();
        Log.i(TAG,"isScreenOn: "+isScreenOn);
        if(isScreenOn){
            finish();
        }
    }

    @Override
    protected void onDestroy() {
        Log.i(TAG,"===onDestroy===");
        try{
            unregisterReceiver(br);
        }catch (IllegalArgumentException e){
            Log.e(TAG,"receiver is not resisted: "+e);
        }
        super.onDestroy();
    }

    @Override
    protected void onResume() {
        super.onResume();
        checkScreenOn("onResume");
    }
}
```

- OnePxReceiver.java

```java
public class OnePxReceiver extends BroadcastReceiver {
    private static OnePxReceiver receiver;
    private static final String TAG = OnePxReceiver.class.getSimpleName();

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.getAction().equals(Intent.ACTION_SCREEN_OFF)) {//屏幕被关闭
            Intent it = new Intent(context, OnePxActivity.class);
            it.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(it);
            Log.i(TAG,"1px--screen off-");
        } else if (intent.getAction().equals(Intent.ACTION_SCREEN_ON)) {//屏幕被打开
            context.sendBroadcast(new Intent("finish activity"));
            Log.i(TAG,"1px--screen on-");
        }
    }

    public static void register1pxReceiver(Context context) {
        if (receiver == null) {
            receiver = new OnePxReceiver();
        }
        context.registerReceiver(receiver, new IntentFilter(Intent.ACTION_SCREEN_OFF));
        context.registerReceiver(receiver, new IntentFilter(Intent.ACTION_SCREEN_ON));
    }

    public static void unregister1pxReceiver(Context context) {
        context.unregisterReceiver(receiver);
    }
}
```

```java
        <activity
            android:name="com.example.test.OnePxActivity"
            android:exported="true">

            <intent-filter>
                <action
                    android:name="android.intent.action.VIEW" />
            </intent-filter>
        </activity>
        <receiver android:name="com.example.test.OnePxReceiver"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.SCREEN_OFF" />
                <action android:name="android.intent.action.SCREEN_ON" />
            </intent-filter>
        </receiver>
        <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

```java
START_STICKY：

    “粘性”。如果service进程被kill掉，保留service的状态为开始状态，但不保留递送的intent对象。随后系统会尝试重新创建service，由于服务状态为开始状态，所以创建服务后一定会调用onStartCommand(Intent,int,int)方法。如果在此期间没有任何启动命令被传递到service，那么参数Intent将为null。

START_NOT_STICKY：

    “非粘性的”。使用这个返回值时，如果在执行完onStartCommand后，服务被异常kill掉，系统不会自动重启该服务。

START_REDELIVER_INTENT：

    重传Intent。使用这个返回值时，如果在执行完onStartCommand后，服务被异常kill掉，系统会自动重启该服务，并将Intent的值传入。

START_STICKY_COMPATIBILITY：

    START_STICKY的兼容版本，但不保证服务被kill后一定能重启。

只要 targetSdkVersion 不小于5，就默认是 START_STICKY。 但是某些ROM 系统不会拉活。并且经过测试，Service 第一次被异常杀死后很快被重启，第二次会比第一次慢，第三次又会比前一次慢，一旦在短时间内 Service 被杀死4-5次，则系统不再拉起。
```

- WorkManager

```java
public class KeepLiveWork extends Worker {

    public KeepLiveWork(@NonNull Context context, @NonNull WorkerParameters workerParams) {
        super(context, workerParams);
    }

    @NonNull
    @Override
    public Result doWork() {
        Log.e("KeepAlive", "doWork: ");

        KeepAliveJobService.startJob(getApplicationContext());

        return Result.success();
    }
}
```

```java
// 添加任务
            OneTimeWorkRequest oneTimeWorkRequest = new OneTimeWorkRequest
                    .Builder(KeepLiveWork.class)
                    .setInitialDelay(30, TimeUnit.SECONDS)
                    .build();
            WorkManager.getInstance(mUniSDKInstance.getContext()).enqueue(oneTimeWorkRequest);
```

- ForegroundService.java(前台服务)

```java
public class ForegroundService extends Service  {
    private final static int SERVICE_ID = 1;
    private static final String TAG = ForegroundService.class.getSimpleName();
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {

        super.onCreate();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (Build.VERSION.SDK_INT<Build.VERSION_CODES.JELLY_BEAN_MR2){
            //4.3以下
            startForeground(SERVICE_ID,new Notification());
        }else if (Build.VERSION.SDK_INT<Build.VERSION_CODES.O){
            //7.0以下
            startForeground(SERVICE_ID,new Notification());
            //删除通知栏
            startService(new Intent(this,InnerService.class));
        }else {
            //8.0以上
            NotificationManager notificationManager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
            //NotificationManager.IMPORTANCE_MIN 通知栏消息的重要级别  最低，不让弹出
            //IMPORTANCE_MIN 前台时，在阴影区能看到，后台时 阴影区不消失，增加显示 IMPORTANCE_NONE时 一样的提示
            //IMPORTANCE_NONE app在前台没有通知显示，后台时有
            NotificationChannel channel = new NotificationChannel("channel", "后台运行", NotificationManager.IMPORTANCE_NONE);
            // 取消小红点
            channel.enableLights(false);
            if (notificationManager!=null){
                CharSequence title = intent.getStringExtra("title");
                CharSequence text = intent.getStringExtra("text");
                // 点击跳转页面
                PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent, PendingIntent.FLAG_IMMUTABLE);
                notificationManager.createNotificationChannel(channel);
                NotificationCompat.Builder builder = new NotificationCompat.Builder(this, "channel");
                builder.setContentTitle(title)
                        .setSmallIcon(R.drawable.baseline_lock_24) //图标
                        .setContentText(text) //标题
                        .setPriority(NotificationCompat.PRIORITY_DEFAULT) // 设置优先级 PRIORITY_DEFAULT
                        .setWhen(System.currentTimeMillis()) // 设置通知发送的时间戳
                        .setContentIntent(pendingIntent) // 跳转页面
                        .setVisibility(NotificationCompat.VISIBILITY_SECRET) // 屏幕可见性，1、VISIBILITY_PUBLIC 在所有锁定屏幕上完整显示此通知 2、VISIBILITY_PRIVATE 隐藏安全锁屏上的敏感或私人信息 3、VISIBILITY_SECRET 不显示任何部分
                        .setOngoing(true);
                Log.e(TAG, "onStart");
                NotificationManagerCompat notificationManagerCompat = NotificationManagerCompat.from(this);
                notificationManagerCompat.notify(SERVICE_ID,builder.build());
                startForeground(SERVICE_ID,builder.build());
            }

        }
        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onDestroy() {
        Log.e(TAG, "onDestroy");
        NotificationManagerCompat notificationManagerCompat = NotificationManagerCompat.from(this);
        notificationManagerCompat.cancelAll();
        stopForeground(true);
        super.onDestroy();
    }

    private static class InnerService extends Service{
        @Nullable
        @Override
        public IBinder onBind(Intent intent) {
            return null;
        }

        @Override
        public void onCreate() {
            super.onCreate();
            Log.d(KeepAlive.TAG, "onCreate: ");
            startForeground(SERVICE_ID,new Notification());
            stopSelf();
        }
    }
}
```

- KeepAliveJobService.java

```
JobScheduler允许在特定状态与特定时间间隔周期执行任务。可以利用它的这个特点完成保活的功能,效果即开启一个定时器，与普通定时器不同的是其调度由系统完成。    同样在某些ROM可能并不能达到需要的效果
```



```java
@SuppressLint("SpecifyJobSchedulerIdRange")
public class KeepAliveJobService extends JobService {
    @Override
    public boolean onStartJob(JobParameters jobParameters) {
        if (Build.VERSION.SDK_INT>= Build.VERSION_CODES.O){
            startJob(this);
        }
        boolean isRunning = util.isRunningService(this, KeepAliveJobService.class.getName());
        if (!isRunning) {
            startService(new Intent(this, KeepAliveJobService.class));
        }
        return false;
    }

    public static void startJob(Context context) {
        JobScheduler jobScheduler = (JobScheduler) context.getSystemService(JOB_SCHEDULER_SERVICE);
        JobInfo.Builder builder = new JobInfo.Builder(27,
                new ComponentName(context.getPackageName(), KeepAliveJobService.class.getName()))
                .setPersisted(true);
        if (Build.VERSION.SDK_INT<Build.VERSION_CODES.N){
            builder.setPeriodic(1000);
        }else {
            builder.setMinimumLatency(1000);
        }
        jobScheduler.schedule(builder.build());
        Log.e("JobService", "jobService: ");
    }

    public static void stopJob(Context context){
        Log.e("JobService", "stop");
        JobScheduler jobScheduler = (JobScheduler) context.getSystemService(JOB_SCHEDULER_SERVICE);
        jobScheduler.cancel(27);
    }

    @Override
    public boolean onStopJob(JobParameters jobParameters) {
        Log.e("JobService", "stop_jobService: ");
        return false;
    }
}
```

- 插件代码

```java
public class keepAlive extends UniModule {

    String TAG = "KEEP_ALIVE";
    @UniJSMethod(uiThread = true)
    public void start(JSONObject options, UniJSCallback callback) throws JSONException {
        try {
            Log.e(TAG, "testAsyncFunc--"+options);
            if(mUniSDKInstance != null && mUniSDKInstance.getContext() instanceof Activity) {
                Intent intent = new Intent(mUniSDKInstance.getContext(), ForegroundService.class);
                intent.putExtra("title",options.getString("title"));
                intent.putExtra("text",options.getString("text"));
//                 开启前台通知服务
                mUniSDKInstance.getContext().startService(intent);

//                 开启一像素服务
                if(!options.containsKey("onePxEnabled") || options.getBoolean("onePxEnabled")){
                    OnePxReceiver.register1pxReceiver(mUniSDKInstance.getContext());
                }

//                 添加任务
                if(!options.containsKey("workerManager") || options.getBoolean("workerManager")) {
                    OneTimeWorkRequest oneTimeWorkRequest = new OneTimeWorkRequest
                            .Builder(KeepLiveWork.class)
                            .setInitialDelay(10, TimeUnit.SECONDS)
                            .build();
                    WorkManager.getInstance(mUniSDKInstance.getContext()).enqueue(oneTimeWorkRequest);
                }
            }
            if(callback != null) {
                JSONObject data = new JSONObject();
                data.put("code", 1);
                callback.invoke(data);
                //callback.invokeAndKeepAlive(data);
            }
        }catch (Exception e){
            if(callback != null) {
                JSONObject data = new JSONObject();
                data.put("code", 2);
                data.put("err",e.getMessage());
                callback.invoke(data);
                //callback.invokeAndKeepAlive(data);
            }
        }
    }

    @UniJSMethod(uiThread = false)
    public void destroy(UniJSCallback callback){
        if(mUniSDKInstance != null && mUniSDKInstance.getContext() instanceof Activity) {
            Intent intent = new Intent(mUniSDKInstance.getContext(), ForegroundService.class);
            mUniSDKInstance.getContext().stopService(intent);

            OnePxReceiver.unregister1pxReceiver(mUniSDKInstance.getContext());
            KeepAliveJobService.stopJob(mUniSDKInstance.getContext());
        }
        if(callback != null) {
            JSONObject data = new JSONObject();
            data.put("code", 0);
            callback.invoke(data);
            //callback.invokeAndKeepAlive(data);
        }
    }
}
```

- ### `proguard-rules.pro`wenjian添加原生混淆

![image-20230510181025522](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510181025522.png)

```java
-keep public class * extends io.dcloud.weex.AppHookProxy{*;}
-keep public class * extends io.dcloud.feature.uniapp.UniAppHookProxy{*;}
-keep public class * extends io.dcloud.feature.uniapp.common.UniModule{*;}
-keep public class * extends io.dcloud.feature.uniapp.ui.component.UniComponent{*;}
```

- 代码开发完成，点击`assembleRelease`打包

![image-20230510181936874](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510181936874.png)



### 三、Android Studio内调试插件

1、完成uni-app项目离线打包，参考[uni-app离线打包](https://www.yhy.gd.cn/articles/139)

uni-app项目具体使用代码（vue3)：

```javascript
import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	const msg = ref('')
	const code = ref('')

	const start = () => {
		const KeepAlive = uni.requireNativePlugin('Keep_Alive')
		// 启动服务
		KeepAlive.start({
				"title": "app",
				"text": "正在后台运行"
			},
			function(ret) {
				console.log(ret)
				if (ret.code == 1) {
					uni.showToast({
						title: '启动成功',
						icon: 'none'
					})
				}
			})
	}
	const stop = () => {
		const KeepAlive = uni.requireNativePlugin('Keep_Alive')
		// 销毁服务
		KeepAlive.destroy(
			function(ret) {
				if (ret.code === 0) {
					uni.showToast({
						title: '停止服务',
						icon: 'none'
					})
				}

			})
	}
```

2、修改以下文件

- 在app文件下的build.grandle的dependencies下添加

  ```java
  implementation project(':Keep_Alive') #插件名
  ```

- 修改dcloud_uniplugins.json

  ```java
  {
    "nativePlugins": [
      {
        "plugins": [
          {
            "type": "module", #固定
            "name": "XY-Keep_Alive", #插件名
            "class": "com.example.keep.keepAlive" #插件路径
          }
        ]
      }
    ]
  }
  ```

  ![image-20230510182445559](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510182445559.png)

### 四、uni-app本地插件调试：

- 在自己uni-app项目中添加以下目录，并把上面打包的aar文件放到`android`目录下：

![image-20230510210056839](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510210056839.png)

![image-20230510205936993](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510205936993.png)

- 修改`package.json`配置,[详细配置说明查看官网uni原生插件包格式](https://nativesupport.dcloud.net.cn/NativePlugin/course/package.html#)：

```javascript
{
	"name": "XY-Keep_Alive",
	"id": "XY-Keep_Alive",
	"version": "1.0.0",
	"description": "安卓原生后台保活插件",
	"_dp_type": "nativeplugin",
	"_dp_nativeplugin": {
		"android": {
			"hooksClass": "com.example.keep.keepAlive",
			"plugins": [{
				"type": "module",
				"name": "XY-Keep_Alive",
				"class": "com.example.keep.keepAlive"
			}],
			"integrateType": "aar",
			"compileOptions": {
				"sourceCompatibility": "1.8",
				"targetCompatibility": "1.8"
			},
			"dependencies": [
				"androidx.work:work-runtime:2.7.1"
			],
			"minSdkVersion": "21",
			"abis": [
				"armeabi-v7a",
				"x86",
				"arm64-v8a"
			]
		}
	}
}

```

- 在项目目录manifest.json下选择App原生插件配置，选择自己的插件打包运行即可调试。

### 五、发布[插件市场](https://ext.dcloud.net.cn/)

进入插件市场，点击发布插件，按照要求填写相关信息发布即可。

![image-20230510210817361](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510210817361.png)

### 六、代码地址

[uni-app安卓原生保活插件](https://github.com/1yhy/Keep_Alive.git)

