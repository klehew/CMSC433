#Kathy LeHew
#6-15-2019
#Project 1
#!/usr/bin/perl
use strict;
use warnings;

print "Please enter a credit card you would like to verify: ";
my $string = <STDIN>;
chomp $string;

#Amex
if($string =~ s/^(.*)?3[4|7]\d{9}(\d{4})(.*)?$/$1...$2$3/){
    print $string . "\n";}

#Discover
elsif($string =~ s/^(.*)?6(?:(?:011)|(?:5\d{2}))\d{8}(\d{4})(.*)?$/$1...$2$3/){
    print $string . "\n";}

#MasterCard
elsif($string =~ s/^(.*\W)?5[1-5]\d{10}(\d{4})(.*)?$/$1...$2$3/){
    print $string . "\n";}

#Visa
elsif($string =~ s/^(.*)?4(?:\d{11}|\d{8})(\d{4})(.*)?$/$1...$2$3/){
    print $string . "\n";}

else{
    print $string . "\n";}
