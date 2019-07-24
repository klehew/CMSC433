#Kathy LeHew
#6-14-2019
#Project 1
#!/usr/bin/perl
use strict;
use warnings;

my $filename = 'proj1/proj1_1_data.txt';

open(my $fh, '<:encoding(UTF-8)', $filename)
    or die "Could not open file '$filename' $!";

my $title = "";
my $fnauthor;
my $lnauthor;
my $price;
my $day;
my $month;
my $year;
my $description = "";

while (my $row = <$fh>){
    chomp $row;
    if ($description eq ""){
    if ($row =~ s/.*<title>(.*XML\s.*)<\/title>.*/$1/g){
	$title = $1;}
    if (($title eq "") && ($row =~ s/.*<author>(\w+),\s(\w+)<\/author>.*/$1 $2/gs)){
	$fnauthor = $2;
	$lnauthor = $1;}
    if (($title ne "") && ($row =~ s/.*<price>(.*)<\/price>.*/$1/gs)){
	$price = $1;}
    if (($title ne "") && ($row =~ s/.*<publish\_date>(\d+)\-(\d+)\-(\d+)<\/publish\_date>.*/$1 $2 $3/gs)){
	$day = $3;
	$month = $2;
	$year = $1;
	$day =~ s/\b0*([1-9])\b/$1/;
	$month =~ s/\b0*([1-9])\b/$1/;
    }
    if (($title ne "") && ($row =~ s/.*<description>(.*)<\/description>.*/$1/gs)){
	$description = $1;}
    }
}
print $fnauthor . " ";
print $lnauthor . " ";
print "\"$title\"" . " ";
print $price . " ";
print $month . "/";
print $day . "/";
print $year . " ";
print $description . "\n";
