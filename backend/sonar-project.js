const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
    {
        serverUrl: 'http://64.225.24.183:9000/',
        token: "37dd273c2db1a13aa888c5e4f630eae599a8495d",
        options: {
            'sonar.projectName': 'BankModule',
            'sonar.projectDescription': 'Integracion para la practica de AYDS.',
            'sonar.language': 'js',
            'sonar.sources': 'src',
            'sonar.tests': 'test',
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.coverage.exclusions': 'src/data/**,src/dataBase/**'
        }
    },
    () => process.exit()
)