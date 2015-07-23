---
layout: post
title:  "Ruby Challenges"
date:   2015-07-22 00:00:00
categories: phase0
---
Write a method to check if a number is a part of the Fibonacci sequence

# Pseudocode
- Input: a number
- Output: a method to check if that number is part of the fibonacci sequence arr. Return true or false
- Fibonacci numbers ie:
- [0,1,1,2,3,5,8,13,21,34,55,89,144]
- each number is the sum of the previous 2
- numbers, starting with [0,1] as the first 2 numbers
- f(n+1) = f(n) + f(n-1)


# Initial Solution
{% highlight ruby %}
def is_fibonacci?(num)
  arr = [0, 1]
  while num > arr.last
    x, y = arr.pop(2)
      arr.push(x, y, x + y)
  end
  return true if num == arr.last
  return false
 end
 {% endhighlight %}

# Refactored Solution
{% highlight ruby %}
def is_fibonacci?(num, current = 1, previous = 0)
  return true if current == num || num == 0
  return false if current > num
  is_fibonacci?(num, current + previous, current)
end


# DRIVER TESTS GO BELOW THIS LINE
p is_fibonacci?(1);
p is_fibonacci?(5);
p is_fibonacci?(10);
p is_fibonacci?(8670007398507948658051921);
p is_fibonacci?(927372692193078999171);
{% endhighlight %}

