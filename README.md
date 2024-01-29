# Boilerplate Kubernetes

This repository serves as a boilerplate or template to test and deploy your Go and NodeJS applications in a monorepo to the Kubernetes Cluster automatically using GitHub Actions.

## Pre-requisite

1. Basic understanding of Kubernetes
2. A Kubernetes cluster
3. Ingress controller like Ingress-Nginx or ALB

## Directory Structure

### `.github/workflows`

Contains the CI/CD to automate the application test, build, and deployment.

### `backends`

Contains the source code of our application.

### `manifests`

Contains the Kubernetes manifestation.

## How To Use

1. Adjust the Kubernetes manifestations as needed.
2. Apply all the Kubernetes manifestations.
3. Configure the GitHub action secrets needed in the workflows.
