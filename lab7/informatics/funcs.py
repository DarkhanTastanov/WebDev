#A
def find_min(a, b, c, d):
    return min(a, min(b, min(c, d)))

a, b, c, d = map(int, input().split())
print(find_min(a, b, c, d))
#B
import math
def power(a, n):
    return math.pow(a,n)

a,n = map(float, input().split())
print(power(a,int(n)))
#C
def xor(x, y):
    return int(x != y)

x, y = map(int, input().split())
result = xor(x, y)
print(result)
