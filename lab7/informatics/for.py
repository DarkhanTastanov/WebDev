# A
in0 = int(input())
in1 = int(input())
nums = ''
for i in range(in0, in1):
    if i % 2 == 0:
        nums += str(i) + ' '

print(nums)
#B
in0 = int(input())
in1 = int(input())
c = int(input())
d = int(input())
nums = ''
for i in range(in0, in1):
    if i % d == c:
        nums += str(i) + ' '

print(nums)
#C
in0 = int(input())
in1 = int(input())
nums = ''
for i in range(in0, in1):
    if i % i**(1/2) == 0:
        nums += str(i) + ' '

print(nums)
#G
in0 = int(input())
num = ''
for i in range(2, in0):
    if in0 % i == 0:
        num += str(i)
        break

print(num)
#H
in0 = int(input())
num = ''
for i in range(1, in0 + 1):
    if in0 % i == 0:
        num += str(i) + ' '

numlen = len(num.split())
print(numlen)
#K
in0 = int(input())
nums = []
sum=0
for i in range(in0):
    a = int(input())
    nums.append(a)
for i in nums:
    sum += i
print(sum)
#M
in0 = int(input())
nums = 0
sum=0
for i in range(in0):
    a = int(input())
    if a == 0:
        nums += 1

print(nums)