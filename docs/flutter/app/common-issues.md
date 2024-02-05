# Flutter 常见问题
## 1. getx 报错
###  问题描述
```bash
[Get] the improper use of a GetX has been detected. You should only use GetX or Obx for the specific widget that will be updated. If you are seeing this error, you probably did not insert any observable variables into GetX/Obx or insert them outside the scope that GetX considers suitable for an update (example: GetX => HeavyWidget => variableObservable). If you need to update a parent widget and a child widget, wrap each one in an Obx/GetX.
```
###  解决方案
```
出现场景： 在一段在代码中同时使用了 GetBuilder 和 Obx 时，会出现这个问题，解决方案是保留其中一个
1、Obx:

Obx是用于监听Rx类型（例如RxInt, RxString, RxList等）的变化。
当您使用.obs创建一个可观察对象时，您应该使用Obx来监听这个对象的变化。
使用Obx时，您不需要手动更新状态。当可观察对象的值改变时，Obx会自动重建其子部件。
示例：RxInt counter = 0.obs;，当counter值改变时，使用Obx可以自动重建UI。
GetBuilder:

2、GetBuilder用于监听GetxController的状态变化。
当您在控制器中更改状态时，您需要手动调用update()方法来通知听众。
GetBuilder更适合那些不经常改变的状态，或者当您需要更多的控制权来决定何时重建UI时。
示例：在一个函数中执行某些操作后，您可以调用update()来重建与该控制器关联的所有GetBuilder小部件。
3、建议:

如果您的状态是使用.obs创建的可观察对象，并且您希望在这些对象的值改变时自动重建UI，那么使用Obx可能更合适。

如果您的状态是在GetxController中定义的，并且您希望有更多的控制权来决定何时重建UI，那么使用GetBuilder可能更合适。

在您提供的代码中，如果currentIndex是一个可观察对象（例如RxInt），那么使用Obx可能更简单和直观。但如果您在其他地方需要手动控制何时更新UI，那么GetBuilder可能更合适。
```
