#!/bin/bash
#!/bin/bash -e

## bash deploy.sh vault sre vault-sre

readonly NODE_IP=$1
readonly SERVICE_NAME=$2

set -e

if [ $# -eq 0 ]; then
    echo "============================================"
    echo "usage: ${0} [node_ip] [service_name]"
    echo "example: ${0} 13.250.60.156 oilthentic"
    echo "============================================"
    echo ""
    exit 1
fi

ssh -i ~/Desktop/dualitystudio/visquares.pem ubuntu@$NODE_IP "bash $SERVICE_NAME.sh"
exit 1