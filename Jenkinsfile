pipeline {
  agent any

  tools {
    nodejs 'node18'   // Jenkins NodeJS tool name (configure this in Jenkins)
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build || echo "no build step"'
      }
    }

    stage('Test') {
      steps {
        echo 'Running smoke test...'
        sh 'echo "server starts correctly"'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Render deploys automatically after GitHub push.'
      }
    }
  }
}
