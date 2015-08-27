---
layout: post
title:  "Behind the scenes: Ruby enumerable methods"
date:   2015-08-23 00:00:00
categories: phase1 enumerable
---

When I first started learning Ruby, I was suspicious of its many built in methods.  In particular, Ruby's enumerable methods that both iterate and do something to each element.

Here is a peek behind what is actually goes on when you call these enumerable methods on your data structure.

**each**
{% highlight ruby %}
  def my_each
    self.length.times do |i|
    yield(self[i])
  end
{% endhighlight %}

**map**
{% highlight ruby %}
  def my_map
    new_array=[]
    my_each do |elem|
      new_array.push yield elem
    end
    new_array
  end
{% endhighlight %}

**select**
{% highlight ruby %}
  def my_select
    new_array = []
    self.my_each do |elem|
      if yield elem
        new_array << elem
      end
    end
    new_array
  end
{% endhighlight %}

**reduce**
{% highlight ruby %}
  def my_reduce(accumulator, starting_value = nil)
    self.my_each do |elem|
      accumulator = yield accumulator, elem
    end
    accumulator
  end
{% endhighlight %}

