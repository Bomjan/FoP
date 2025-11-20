import sys
import time

wave = ["|", "/", "-", "\\"]

def flowing_ascii_bar(progress, total, length=50):
  ratio = progress / total
  filled = int(ratio * length)
  
  frame = wave[progress % len(wave)]

  bar = "#" * filled + frame + "." * (length - filled - 1)

  sys.stdout.write(f"\r[{bar}] {ratio*100:6.2f}% Calculating your age...")
  sys.stdout.flush()

user = input("Enter your age: ")

total = 581
for i in range(total + 1):
  flowing_ascii_bar(i, total)
  time.sleep(0.05)

print(f"\nYou are {user} years old.")
