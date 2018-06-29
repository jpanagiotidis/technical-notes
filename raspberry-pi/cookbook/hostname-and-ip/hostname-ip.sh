#!/bin/sh

hostname=$1 # the hostname of the node
ip=$2 # the node IP
dns=$3 # the router IP

echo $hostname' '$ip' '$dns

# Change the hostname
sudo hostnamectl --transient set-hostname $hostname
sudo hostnamectl --static set-hostname $hostname
sudo hostnamectl --pretty set-hostname $hostname
sudo sed -i s/raspberrypi/$hostname/g /etc/hosts

# Set the static ip

sudo cat <<EOT >> /etc/dhcpcd.conf
interface eth0
static ip_address=$ip/24
static routers=$dns
static domain_name_servers=$dns
EOT

sudo reboot
