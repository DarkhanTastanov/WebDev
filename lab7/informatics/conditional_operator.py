#1
in0 = int(input())
in1 = int(input())
print(in0 if in0 > in1 else in1)
#B
in0 = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")
#C
in0 = int(input())
in1 = int(input())
#D
in0 = int(input())
def sign(x):
    if x > 0:
        return 1
    elif x < 0:
        return -1
    else:
        return 0
print(sign(in0))
#E
in0 = int(input())
in1 = int(input())
def sign(x, y):
    if x > y:
        return 1
    elif x < y:
        return 2
    else:
        return 0
print(sign(in0, in1))
