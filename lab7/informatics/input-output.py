#1
in0 = int(input())
in1 = int(input())
print((in0**2 + in1**2)**(1/2))
#2
in0 = int(input())
print(in0-1)
print(in0+1)
#3
in0 = int(input())
in1 = int(input())
print(int(in1/in0))
#4
in0 = int(input())
in1 = int(input())
print(in1 - (in0 * int(in1/in0)))
#5
in0 = int(input())
in1 = int(input())
km = in0 * in1
while (km > 109):
    km -= 109

print(km)
#6
in0 = str(input())
print(int(in0[len(in0)-1]))
#7
in0 = int(input())
print(int(in0/10))
#8
in0 = str(input())
print(int(in0[len(in0)-2]))
