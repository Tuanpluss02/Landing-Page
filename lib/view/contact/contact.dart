import 'package:flutter/cupertino.dart';
import 'package:my_portfolio/responsive.dart';
import 'package:my_portfolio/view/contact/contact_mobile.dart';
import 'package:my_portfolio/view/contact/contact_tab.dart';
import 'package:my_portfolio/view/contact/contact_web.dart';

class Contact extends StatefulWidget {
  const Contact({Key? key}) : super(key: key);

  @override
  State<Contact> createState() => _ContactState();
}

class _ContactState extends State<Contact> {
  @override
  Widget build(BuildContext context) {
    return Responsive(
      webView: const ContactWeb(),
      tabView: const ContactTab(),
      mobileView: const ContactMobile(),
    );
  }
}
