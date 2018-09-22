spawn ssh root@119.28.52.201
expect {
    "*yes/no" {send "yes\r"; exp_continue}
    "*password:" {send "david0324\r"}
}
interact