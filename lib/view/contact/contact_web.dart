import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:my_portfolio/resource/app_class.dart';
import 'package:rive/rive.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../resource/colors.dart';
import '../../resource/strings.dart';

class ContactWeb extends StatefulWidget {
  const ContactWeb({Key? key}) : super(key: key);

  @override
  State<ContactWeb> createState() => _ContactWebState();
}

class _ContactWebState extends State<ContactWeb> {
  String animation = 'idle';

  Artboard? _helloArtboard;
  SMIBool? _onHoverDetect;
  StateMachineController? stateMachineController;

  @override
  void initState() {
    super.initState();
    rootBundle.load('assets/rive/pup_hello.riv').then(
      (data) async {
        final file = RiveFile.import(data);
        final artboard = file.mainArtboard;
        stateMachineController =
            StateMachineController.fromArtboard(artboard, "State Machine 1");
        if (stateMachineController != null) {
          artboard.addController(stateMachineController!);
          _onHoverDetect = stateMachineController!.findSMI('searchHover');
          // for (var e in stateMachineController!.inputs) {
          //   debugPrint(e.runtimeType.toString());
          //   debugPrint("name ${e.name} End");
          // }
          // try {
          _onHoverDetect = stateMachineController!.inputs.first as SMIBool;
          //   } on Exception catch (exception) {
          //     print(exception);
          //   } catch (error) {
          //     print(error);
          //   }
        }

        setState(() => _helloArtboard = artboard);
      },
    );
  }

  void jump() {
    _onHoverDetect?.value = true;
  }

  void disjump() {
    _onHoverDetect?.value = false;
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        height: AppClass().getMqHeight(context) - 70,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      '''04.''',
                      style: TextStyle(
                          color: AppColors().neonColor,
                          fontSize: 15,
                          fontFamily: 'sfmono'),
                    ),
                    Text(
                      ''' What's next?''',
                      style: TextStyle(
                          color: AppColors().neonColor,
                          fontSize: 18,
                          fontFamily: 'sfmono'),
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 8.0),
                  child: Text(
                    'Get In Touch',
                    style: GoogleFonts.robotoSlab(
                      color: AppColors().textColor,
                      fontWeight: FontWeight.bold,
                      letterSpacing: 3,
                      fontSize: 55,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 15.0),
                  child: SizedBox(
                    width: AppClass().getMqWidth(context) * 0.45,
                    child: Text(
                      Strings.endTxt,
                      textAlign: TextAlign.center,
                      style: GoogleFonts.roboto(
                        color: AppColors().textLight,
                        letterSpacing: 1,
                        height: 1.5,
                        fontSize: 18,
                      ),
                    ),
                  ),
                ),
                SizedBox(
                  // padding: const EdgeInsets.only(bottom: 20),
                  height: AppClass().getMqHeight(context) * 0.2,
                  width: AppClass().getMqWidth(context) * 0.5,
                  child: InkWell(
                    onTap: () async {
                      await launchUrl(
                          Uri.parse("https://m.me/tuanpluss.stormX/"));
                    },
                    onHover: (bol) {
                      if (bol) {
                        jump();
                      } else {
                        disjump();
                      }
                    },
                    child: Stack(children: [
                      Center(
                        child: Container(
                          margin: const EdgeInsets.only(top: 5),
                          child: Rive(
                            artboard: _helloArtboard!,
                            // alignment: Alignment.center,
                          ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsets.only(
                            top: AppClass().getMqHeight(context) * 0.09,
                            right: 10),
                        child: Center(
                          child: Text('Say Hello!',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                  color: AppColors().primaryColor,
                                  fontSize: 25,
                                  letterSpacing: 1,
                                  fontWeight: FontWeight.bold,
                                  fontFamily: 'sfmono')),
                        ),
                      ),
                    ]),

                    //    ),
                    //  ),
                  ),
                )
              ],
            ),
            Column(
              children: [
                Text(
                  '''Thanks for visit my website''',
                  style: TextStyle(
                      color: AppColors().textColor,
                      fontSize: 12,
                      fontFamily: 'sfmono'),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    '''Do Ngoc Tuan - 2023''',
                    style: TextStyle(
                        color: AppColors().neonColor,
                        fontSize: 12,
                        fontFamily: 'sfmono'),
                  ),
                ),
              ],
            )
          ],
        ));
  }
}
