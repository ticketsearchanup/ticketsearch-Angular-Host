pipeline {
    agent any
    environment {
        NODE_ENV = "production"
        NODE_OPTIONS = "--openssl-legacy-provider"// Set any environment variables you may need
    }
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning the Angular public Git repository...'
                git url: 'https://github.com/ticketsearchanup/ticketsearch-Angular-Host', branch: 'master'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat """
                    npm install
                """
            }
        }
        stage('Build') {
            steps {
                echo 'Building the Angular application...'
                bat 'npm run build --prod' // Adjust based on your Angular build script
            }
        }
        stage('Archive Build') {
            steps {
                echo 'Archiving the build artifacts...'
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Angular application built successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
