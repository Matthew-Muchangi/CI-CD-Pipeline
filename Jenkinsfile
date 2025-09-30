pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'git@github.com:Matthew-Muchangi/CI-CD-Pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                script {
                    try {
                        sh 'npm test'
                    } catch (err) {
                        mail to: 'matthewmuchangi@gmail.com',
                             subject: "Build Failed in Jenkins: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                             body: "Tests failed. Check console output: ${env.BUILD_URL}"
                        throw err
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    pm2 stop darkroom || true
                    pm2 start server.js --name darkroom
                '''
            }
        }
    }
}
