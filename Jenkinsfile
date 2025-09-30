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
                sh 'echo "No tests yet, skipping..."'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Build successful"'
            }
        }

        stage('Deploy') {
            steps {
                // Stop existing app if running, then start again with PM2
                sh '''
                    pm2 stop darkroom || true
                    pm2 start server.js --name darkroom
                '''
            }
        }
    }
}

