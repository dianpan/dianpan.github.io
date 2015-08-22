---
layout: post
title:  "Recursion vs Iteration, lets Benchmark it!"
date:   2015-08-22 00:00:00
categories: phase1
---
<img class="center" src="https://s-media-cache-ak0.pinimg.com/236x/06/53/2c/06532c1162edee91df1ee1b2d7c296dc.jpg" alt="recursive cat nap" style="width: 236px; height: 191px;"/>

Following up on my post on Big O, I want to dive deeper into implementing a program iteratively vs recursively. Again, using the classic Fibonacci method that calculates the nth number of the Fibonacci sequence as example:

# Fibonacci - iterative
{% highlight ruby %}
def fibonacci_iterative(n)
  array =[0,1]
  2.upto(n) do |num|
    array << (array[num-2] + array[num-1])
  end
  array[n]
end
{% endhighlight %}

# Fibonacci - recursive
{% highlight ruby %}
def fibonacci_recursive(n)
  return n if [0,1].include? n
  fibonacci_recursive(n-2) + fibonacci_recursive(n-1)
end
{% endhighlight %}

We can measure a program's runtime by using Ruby's handy [Benchmark](http://ruby-doc.org/stdlib-1.9.3/libdoc/benchmark/rdoc/Benchmark.html) module.

{% highlight ruby %}
puts Benchmark.measure{fibonacci_iterative(20)}
# => (  0.000006)
puts Benchmark.measure{fibonacci_recursive(20)}
# => (  0.001187)
{% endhighlight %}

As you can see, my recursive solution performs far worse in terms of runtime than it's iterative counterpart.  This is because our method re-calculates all of the preceeding numbers *every* time it is run.

What if instead we have our method remember the results of our earlier calculations? That's the concept behind Memoization.  We can create an empty hash to store temporaru results and then have our program check if that calculation has been done already, if it has, we can just use the stored result.

Refactoring our recursive solution:
# Fibonacci recursive - refactored
{% highlight ruby %}
CACHE = {}
def memoized_fibonacci(n)
  CACHE[n] ||= (n <= 1 ? n : memoized_fibonacci(n-2) + memoized_fibonacci(n-1))
end
{% endhighlight %}

Our runtimes are now much more comparable.

{% highlight ruby %}
puts Benchmark.measure{fibonacci_iterative(20)}
# => (  0.000006)
puts Benchmark.measure{fibonacci_recursive(20)}
# => (  0.001187)
puts Benchmark.measure{memoized_fibonacci(20)}
# => (  0.000010)
{% endhighlight %}

OH YEAH!!
<img class="center" src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCIyd9dWIvccCFYYXPgoddO0O-g&url=http%3A%2F%2Fnbcsnl.tumblr.com%2Fpost%2F60276830318%2Fdear-beyonce-happy-birthday-love-your&ei=WZ3YVYWNNYHX-AHX3YnoDw&psig=AFQjCNHgxCfp6M_qtTsVdd21o1LylYTnfw&ust=1440345818209059" alt="happy dance" style="width: 350px; height: 197px;"/>


**this was one of my favorite challenges from Week 1 at DBC, so naturally I had to blog about it.**

**References**:

* [Big O Cheat Sheet](http://bigocheatsheet.com/)
* [Biginner's guide](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
* [Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)
