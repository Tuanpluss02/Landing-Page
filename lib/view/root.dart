import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:my_portfolio/view/widget/app_bar.dart';
import 'package:my_portfolio/view/widget/left_pane.dart';
import 'package:my_portfolio/view/widget/right_pane.dart';
import 'package:scroll_to_index/scroll_to_index.dart';
import 'package:web_smooth_scroll/web_smooth_scroll.dart';

import '../controller/general_controller.dart';
import '../resource/app_class.dart';
import 'about/about.dart';
import 'contact/contact.dart';
import 'experience/experience.dart';
import 'intro/intro.dart';
import 'work/work.dart';

class RootScreen extends ConsumerStatefulWidget {
  const RootScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<RootScreen> createState() => _RootScreenState();
}

class _RootScreenState extends ConsumerState<RootScreen> {
  final aScrollController = AutoScrollController();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: NotificationListener<UserScrollNotification>(
          onNotification: (notification) {
            final ScrollDirection direction = notification.direction;
            if (direction == ScrollDirection.reverse) {
              ref.read(scrollControlProvider.notifier).state = false;
            } else if (direction == ScrollDirection.forward) {
              ref.read(scrollControlProvider.notifier).state = true;
            }
            return true;
          },
          child: Container(
            decoration: const BoxDecoration(
                gradient: LinearGradient(
                    begin: Alignment.bottomCenter,
                    end: Alignment.topCenter,
                    colors: [
                  Color(0xff112240),
                  Color(0xff0a192f),
                  Color(0xff020c1b)
                ])),
            height: AppClass().getMqHeight(context),
            child: Column(
              children: [
                Consumer(builder: (context, ref, child) {
                  var isScrollingUp = ref.watch(scrollControlProvider);
                  return AnimatedOpacity(
                    opacity: isScrollingUp ? 1.0 : 0.0,
                    duration: const Duration(milliseconds: 500),
                    child: ActionBar(aScrollController),
                  );
                }),
                Expanded(
                  child: () {
                    ScreenType scrType = AppClass().getScreenType(context);
                    return Row(
                      children: [
                        scrType == ScreenType.mobile
                            ? const SizedBox()
                            : const LeftPane(),
                        Expanded(
                            flex: 8,
                            child: WebSmoothScroll(
                              controller: aScrollController,
                              scrollOffset: 250,
                              child: ListView(
                                physics: scrType == ScreenType.web
                                    ? const NeverScrollableScrollPhysics()
                                    : const BouncingScrollPhysics(),
                                controller: aScrollController,
                                children: [
                                  AutoScrollTag(
                                      key: const ValueKey(0),
                                      controller: aScrollController,
                                      index: 0,
                                      child: IntroContent(aScrollController)),
                                  AutoScrollTag(
                                      key: const ValueKey(1),
                                      controller: aScrollController,
                                      index: 1,
                                      child: const About()),
                                  AutoScrollTag(
                                      key: const ValueKey(2),
                                      controller: aScrollController,
                                      index: 2,
                                      child: const Experience()),
                                  AutoScrollTag(
                                      key: const ValueKey(3),
                                      controller: aScrollController,
                                      index: 3,
                                      child: const Work()),
                                  AutoScrollTag(
                                      key: const ValueKey(4),
                                      controller: aScrollController,
                                      index: 4,
                                      child: const Contact())
                                ],
                              ),
                            )),
                        scrType == ScreenType.mobile
                            ? const SizedBox()
                            : const RightPane(),
                      ],
                    );
                  }(),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
