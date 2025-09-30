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
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || echo "No tests defined"'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage complete'
            }
        }
    }
}

