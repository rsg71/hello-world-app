pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/rsg71/hello-world-app', branch: 'main')
      }
    }

    stage('Log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Check if failed') {
      steps {
        sh 'echo tests have failed && exit 1'
      }
    }

  }
}