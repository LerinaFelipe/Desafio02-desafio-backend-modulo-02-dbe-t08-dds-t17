class CustomReporter {
  onRunComplete(_contexts, results) {
    const { numPassedTests, numFailedTests } = results;
    const typeTest = process.env.TYPE_TEST;

    const BgRed = "\x1b[41m";
    const BgGreen = "\x1b[42m";
    const Reset = "\x1b[0m";

    console.log("");

    if (results.testResults[0].testExecError) {
      console.log(`${BgRed}ERRO NA EXECUÇÃO DO CÓDIGO!${Reset}`);
      console.log(results.testResults[0].testExecError);
      return;
    }

    if (typeTest === "all") {
      const totalTests = numPassedTests + numFailedTests;
      const nota = ((numPassedTests / totalTests) * 100).toFixed(2);
      let mensagem =
        nota >= 75
          ? `${BgGreen}Sua nota é ${nota}%${Reset}`
          : `${BgRed}Sua nota é ${nota}%${Reset}`;
      return console.log(mensagem);
    }

    if (numFailedTests === 0) {
      console.log(
        `${BgGreen}Parabéns! Você passou em todas as verificações!${Reset}`
      );
      return;
    }

    console.log(
      `${BgGreen}Você passou em ${numPassedTests} ${
        numPassedTests === 1 ? "verificação" : "verificações"
      } ${Reset}`
    );
    console.log(
      `${BgRed}Você reprovou em ${numFailedTests} ${
        numFailedTests === 1 ? "verificação" : "verificações"
      } ${Reset}`
    );

    if (numFailedTests > 0) {
      console.log("\nVerificações que falham:");
      results.testResults.forEach((result) => {
        result.testResults.forEach((testResult) => {
          if (testResult.status === "failed") {
            console.log("\x1b[31m%s\x1b[0m", "- " + testResult.fullName);
          }
        });
      });
    }
  }
}

module.exports = CustomReporter;
