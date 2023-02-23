import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:my_portfolio/controller/general_controller.dart';
import 'package:rive/rive.dart';
import 'package:scroll_to_index/scroll_to_index.dart';

import '../../resource/app_class.dart';
import '../../resource/colors.dart';
import '../../resource/strings.dart';

// ignore: must_be_immutable
class IntroWeb extends StatefulWidget {
  AutoScrollController aScrollController;

  IntroWeb(this.aScrollController, {Key? key}) : super(key: key);

  @override
  State<IntroWeb> createState() => _IntroWebState();
}

class _IntroWebState extends State<IntroWeb> {
  // late bool isHovered;
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.transparent,
      margin: EdgeInsets.only(
          left: AppClass().getMqWidth(context) * 0.01,
          top: AppClass().getMqHeight(context) * 0.1),
      child: Column(
        children: [
          const Center(
            child: SizedBox(
                height: 600,
                width: 700,
                child: RiveAnimation.asset('assets/rive/handwriting.riv')),
          ),
          Row(
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(left: 8.0, top: 50),
                    child: Text(
                      Strings.welcomeTxt,
                      style: TextStyle(
                          color: AppColors().neonColor,
                          fontSize: 18,
                          fontFamily: 'sfmono'),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 8.0),
                    child: Text(
                      Strings.name,
                      style: GoogleFonts.robotoSlab(
                        color: AppColors().textColor,
                        fontWeight: FontWeight.bold,
                        letterSpacing: 3,
                        fontSize: 55,
                      ),
                    ),
                  ),
                  SizedBox(
                    width: AppClass().getMqWidth(context) -
                        (AppClass().getMqWidth(context) * 0.23),
                    child: Padding(
                      padding: const EdgeInsets.only(top: 5.0),
                      child: Text(
                        Strings.whatIdo,
                        style: GoogleFonts.robotoSlab(
                          color: AppColors().textLight,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 3,
                          fontSize: 55,
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 30.0),
                    child: SizedBox(
                      width: AppClass().getMqWidth(context) * 0.45,
                      child: RichText(
                          text: TextSpan(
                              text: Strings.introAbout,
                              style: GoogleFonts.roboto(
                                color: AppColors().textLight,
                                letterSpacing: 1,
                                height: 1.5,
                                fontSize: 18,
                              ),
                              children: <TextSpan>[
                            TextSpan(
                              text: Strings.currentOrgName,
                              style: GoogleFonts.roboto(
                                color: AppColors().neonColor,
                                letterSpacing: 1,
                                height: 1.5,
                                fontSize: 18,
                              ),
                            )
                          ])),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 50, bottom: 70),
                    child: Consumer(builder: (context, ref, child) {
                      var data = ref.watch(hoverProvider);
                      bool isHovered = (data == "checkout");
                      return InkWell(
                        onHover: (bol) {
                          if (bol) {
                            ref.read(hoverProvider.notifier).state = "checkout";
                          } else {
                            ref.read(hoverProvider.notifier).state = "";
                          }
                        },
                        onTap: () {
                          widget.aScrollController.scrollToIndex(1,
                              preferPosition: AutoScrollPosition.begin);
                        },
                        child: Container(
                          height: AppClass().getMqHeight(context) * 0.09,
                          width: AppClass().getMqWidth(context) * 0.2,
                          decoration: BoxDecoration(
                              color: (isHovered
                                  ? AppColors().neonColor
                                  : Colors.transparent),
                              borderRadius:
                                  const BorderRadius.all(Radius.circular(3.0)),
                              border: Border.all(
                                  color: AppColors().neonColor, width: 1.5)),
                          child: Center(
                            child: Text('Check Out My Work!',
                                style: TextStyle(
                                    color: (isHovered
                                        ? Colors.black
                                        : AppColors().neonColor),
                                    fontSize: 13,
                                    letterSpacing: 1,
                                    fontWeight: FontWeight.bold,
                                    fontFamily: 'sfmono')),
                            // child: SizedBox(
                            //     height: AppClass().getMqHeight(context) * 0.2,
                            //     width: AppClass().getMqWidth(context) * 0.3,
                            //     child: const RiveAnimation.asset(
                            //         'rive/handwriting.riv')),
                          ),
                        ),
                      );
                    }),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
