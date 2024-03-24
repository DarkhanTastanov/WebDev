#A
a = int(input())
i = 1
while i * i < a:
    print(i * i)
    i += 1
#B
a = int(input())
i = 2
while a % i != 0:
    i += 1
print(i)
#C
a = int(input())
i = 1
nums = ''
while i * i < a:
    nums += i*i + ''
    i += 1
print(nums)
#D
