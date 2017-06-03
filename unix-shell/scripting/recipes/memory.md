ps -aux --sort=-%mem | awk 'NR<=10(print $0)'
ps -aux --sort=-%mem | grep node
ps -eo pmem,pcpu,vsize,pid,cmd | sort -k 1 -nr | head -5
