import 'package:flutter/material.dart';
import 'package:my_portfolio/model/work_model.dart';
import 'package:url_launcher/url_launcher.dart';

import 'colors.dart';
import 'styles.dart';

enum ScreenType { mobile, tab, web }

class AppClass {
  static final AppClass _mAppClass = AppClass._internal();
  static BuildContext? lastContext;
  ScrollController controller = ScrollController();

  /* URL */
  static const resumeDownloadURL = '''https://t.me/Tuanpluss02''';

  static const gitSafeC19 = '''https://github.com/Tuanpluss02/english-memory''';

  // static final gitHermarts = '''https://github.com/jeeva-HBK/SafeC19''';
  static const gitWtIot =
      '''https://github.com/Tuanpluss02/e-commerce-flutter''';
  static const gitAutoStabilizer =
      '''https://github.com/Tuanpluss02/Computer-Program-Assignment''';
  static const gitPAT =
      '''https://github.com/Tuanpluss02/Microprocessors-Assignment''';

  // static final gitAVM = '''https://github.com/jeeva-HBK/SafeC19''';

  List<WorkModel> projectList = [
    WorkModel(
        projectTitle: "English Quiz",
        projectContent:
            "This is a simple English quiz app, it's a game to test your English knowledge.",
        tech1: "Android",
        tech2: "Flutter",
        tech3: "iOS"),
    WorkModel(
        projectTitle: "Flutter Chat App",
        projectContent:
            "A simple chating application using Firebase to store data and Flutter to build UI.",
        tech1: "Firebase",
        tech2: "Flutter",
        tech3: "BLoC"),
    WorkModel(
        projectTitle: "E-Commerce UI App",
        projectContent: '''This is a simple E-Commerce app, only UI.''',
        tech1: "Android",
        tech2: "Hero",
        tech3: "Flutter"),
    WorkModel(
        projectTitle: "Custom management system",
        projectContent:
            '''This is a simple customer management system written in C++. It's allows you to add, edit, delete, sort and search customers. It also allows you to save and load customers from a file.''',
        tech1: "C++",
        tech2: "Regex",
        tech3: "OOP"),
    WorkModel(
        projectTitle: "STM32 Project",
        projectContent:
            '''Using STM32 to control 26 LEDs, 1 button to change the effect of the LEDs. The project is written in C.''',
        tech1: "C Language",
        tech2: "STM32",
        tech3: "Embedded"),
    WorkModel(
        projectTitle: "Discord bot",
        projectContent: '''A Discord bot using Dart and nyxx package.''',
        tech1: "Dart",
        tech2: "Nyxx",
        tech3: "Discord"),
  ];

  factory AppClass() {
    return _mAppClass;
  }

  AppClass._internal();

  getMqWidth(BuildContext context) {
    return MediaQuery.of(context).size.width;
  }

  getMqHeight(BuildContext context) {
    return MediaQuery.of(context).size.height;
  }

  showSnackBar(String msg, {BuildContext? context}) {
    ScaffoldMessenger.of(context ?? lastContext!)
        .showSnackBar(SnackBar(content: Text(msg)));
  }

  ScreenType getScreenType(BuildContext context) {
    double scrWidth = getMqWidth(context);
    if (scrWidth > 915) {
      return ScreenType.web;
    } else if (scrWidth < 650) {
      return ScreenType.mobile;
    }
    return ScreenType.tab;
  }

  downloadResume(context) async {
    await launchUrl(Uri.parse(AppClass.resumeDownloadURL));
  }

  alertDialog(context, title, msg) {
    showDialog(
        context: context,
        builder: (_) => AlertDialog(
                title: Text(title, style: TxtStyle().boldWhite(context)),
                content: Text(msg),
                actions: [
                  ElevatedButton(
                      style: ElevatedButton.styleFrom(
                          backgroundColor: AppColors().neonColor),
                      onPressed: () => Navigator.pop(context),
                      child: const Text(
                        'Okay',
                        style: TextStyle(color: Colors.black),
                      ))
                ]));
  }
}
