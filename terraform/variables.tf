variable "region" {
  description = "The AWS region to deploy in"
  type        = string
}

variable "subnet_id" {
  description = "Subnet ID for the EC2 instance"
}

variable "key_name" {
  description = "The name of the key pair"
  type        = string
}

variable "public_key" {
  description = "The public key for SSH access"
  type        = string
}

variable "private_key" {
  description = "The private key for SSH access"
  type        = string
  sensitive   = true
}
