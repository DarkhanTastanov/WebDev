#A
N = int(input())
array = input().split()

for i in range(N):
    if i % 2 == 0:
        print(array[i], end=" ")
#B
N = int(input())
array = list(map(int, input().split()))

for i in range(N):
    if array[i] % 2 == 0:
        print(array[i], end=" ")
#C
N = int(input())
array = list(map(int, input().split()))

count_positive = 0
for num in array:
    if num > 0:
        count_positive += 1

print(count_positive)
#D
n = int(input())
a = list(map(int, input().split()))
cnt = 0
j = -9999
for i in a:
    if i > j:
        cnt+=1
    j = i

print(cnt-1)
#E
n = int(input())
a = list(map(int, input().split()))
cnt = 0
for i in range(1, n):
    if (a[i] < 0 and a[i - 1] < 0) or (a[i] > 0 and a[i - 1] > 0):
        cnt += 1

if cnt > 0:
    print("YES")

else:
    print("NO")
#F
n = int(input())
a = list(map(int, input().split()))
cnt = 0
for i in range(2, n):
    if a[i-2] < a[i-1] and a[i] < a[i-1]:
        cnt+=1

print(cnt)
#G
N = int(input())
array = list(map(int, input().split()))

for i in range(N - 1, -1, -1):
    print(array[i], end=" ")
