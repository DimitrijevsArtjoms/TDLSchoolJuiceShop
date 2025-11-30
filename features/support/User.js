export default class User {
  constructor(
    email = "newmail123@mailnator.com",
    password = "qwerty123",
    secQuestionOption = "Your eldest siblings middle name?",
    securityAnswer = "A"
  ) {
    this.email = email;
    this.password = password;
    this.secQuestionOption = secQuestionOption;
    this.securityAnswer = securityAnswer;
  }
}
