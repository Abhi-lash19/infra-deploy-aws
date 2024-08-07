## infra-deploy-aws

This project implements a CI/CD pipeline using Terraform and AWS. It automates infrastructure provisioning and deployment using GitHub Actions, Docker, and Amazon ECR. This setup ensures efficient, scalable, and consistent application delivery.

## Tech Stack 💻

- **Git** 🐙: Version control system to track changes.
- **GitHub** 🌐: Hosting the repository and managing CI/CD workflows with GitHub Actions.
- **GitHub Actions** ⚙️: Automating the CI/CD pipeline.
- **Terraform** 🌍: Infrastructure as Code (IaC) tool to provision AWS resources.
- **AWS EC2** 🖥️: Virtual servers to host applications.
- **Docker** 🐳: Containerization of applications.
- **Amazon ECR** 🐋: Storing and managing Docker images.

## Project Structure 📂
```bash
infra-deploy-aws/
├── .github/
│ └── workflows/
│ └── ci-cd.yml
├── terraform/
│ ├── main.tf
│ ├── variables.tf
│ └── outputs.tf
├── docker/
│ ├── Dockerfile
│ └── app/
│ └── ...
└── README.md
```

## Features ✨

- **Automated CI/CD**: Continuous Integration and Continuous Deployment using GitHub Actions.
- **Infrastructure as Code**: Manage infrastructure using Terraform.
- **Scalability**: Easily scale applications with AWS EC2 and Docker.
- **Version Control**: Track changes and collaborate with Git.

## Getting Started 🏁

### Prerequisites

- **Git**: [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **Terraform**: [Install Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **AWS CLI**: [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Abhi-lash19/infra-deploy-aws.git
    cd terraform-aws-cicd
    ```

2. **Set up Terraform**:
    ```sh
    cd terraform
    terraform init
    terraform apply
    ```


## Usage 🚀

- **Trigger CI/CD Pipeline**: Push changes to the GitHub repository to trigger the CI/CD pipeline.
- **Deploy Application**: Terraform scripts will automatically provision infrastructure and deploy the application.


## Acknowledgements 🙏

- [Terraform](https://www.terraform.io/)
- [AWS](https://aws.amazon.com/)
- [Docker](https://www.docker.com/)
- [GitHub Actions](https://github.com/features/actions)

---

