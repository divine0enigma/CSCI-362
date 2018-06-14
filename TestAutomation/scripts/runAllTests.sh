##########################################################################################
#
#			runAllTests.sh
#
#	CS 362: Software Engineering
#	Team Name: 4Banger
#	Team Members: Cass Outlaw, Justin Arends, Drew Bigelow, Christopher "Craig" Stolarski
#	Objective: Bas scrit for unit testing the H/FOSS project Tanaguru
#
##########################################################################################



##	clear the terminal 	##
clear

## 	Initilize the html output page 	##
## 	Pre built HTML code to setup the output page 	##
touch ./htmlFiles/contrastFinderTest.html
cat ./htmlFiles/head.html >> ./htmlFiles/contrastFinderTest.html
#cat ./htmlFiles/newCell.html >> ./htmlFiles/contrastFinderTest.html

#####################################################################
#
#			Begin Dynamic Testing
#
#####################################################################
directory=$(pwd)

javac ./Contrast-Finder/contrast-finder-utils/src/main/java/org/opens/utils/contrastchecker/ContrastChecker.java ./Contrast-Finder/contrast-finder-utils/src/main/java/org/opens/utils/colorconvertor/ColorConverter.java ./drivers/*.java -d "$directory"


##	Loop through all file in directory 	 	##
for file in ./testCases/*.txt
do
	## 	Give feedback to know what test is Running	##
	echo "Running: $file"

	## TestedClass = third like of the test file 	##
	TestDriver=$(sed '2q;d' $file)
	echo "Tested Driver = $TestDriver" 

	##	Retrive Test inputs 	##
	inputs=$(sed '4q;d' $file) 
	#echo $content

	## 	Test to see if driver exists	##
	if test -f ./drivers/$TestDriver.java

		then driver="Project362.$TestDriver"

		##	Execute the driver with Test inputs 	##
		java $driver  "$inputs" > ./outputs/output.txt

		

		

	##		NO Testable method 						##
	else
		echo "No Testable Method Found"
		continue

	fi

	


#####################################################################
#
#		HTML PROCESSING (in loop)
#
#####################################################################


		## 		New row for the HTML page 	##
		echo "<tr>" >> ./htmlFiles/contrastFinderTest.html
		cat ./htmlFiles/newCell.html >> ./htmlFiles/contrastFinderTest.html

		## 		Values in the test File adding them to the HTML Page 	##

		##		Test Number
		(sed '1q;d' $file) >> ./htmlFiles/contrastFinderTest.html
		echo "</td>" >> ./htmlFiles/contrastFinderTest.html

		##		Tested Method
		cat ./htmlFiles/newCell.html >> ./htmlFiles/contrastFinderTest.html
		(sed '3q;d' $file) >> ./htmlFiles/contrastFinderTest.html
		echo "</td>" >> ./htmlFiles/contrastFinderTest.html

		## 		Requirment
			#cat ./htmlFiles/newCell.html >> ./htmlFiles/contrastFinderTest.html
			#(sed '6q;d' $file) >> ./htmlFiles/contrastFinderTest.html
			#echo "</td>" >> ./htmlFiles/contrastFinderTest.html

		##		Input variables
		cat ./htmlFiles/newCell.html >> ./htmlFiles/contrastFinderTest.html
		(sed '4q;d' $file) >> ./htmlFiles/contrastFinderTest.html
		echo "</td>" >> ./htmlFiles/contrastFinderTest.html

		##		Expected Output
		cat ./htmlFiles/newCell.html >> ./htmlFiles/contrastFinderTest.html
		(sed '5q;d' $file) >> ./htmlFiles/contrastFinderTest.html
		echo "</td>" >> ./htmlFiles/contrastFinderTest.html
		
		##	ADD the output file form the driver to the HTML page ##
		cat ./htmlFiles/newCell.html >> ./htmlFiles/contrastFinderTest.html
		cat ./outputs/output.txt >> ./htmlFiles/contrastFinderTest.html

		##	ADD PASS/FAIL to the HTML page	##
		cat ./htmlFiles/newCell.html >> ./htmlFiles/contrastFinderTest.html
		
		actualOutput=$(sed '1q;d' ./outputs/output.txt)
		expectedOutput=$(sed '5q;d' $file)

		## Testing acutal output vs expected output 	##
		if [ "$actualOutput" = "$expectedOutput" ]
			then echo "PASS" >> ./htmlFiles/contrastFinderTest.html
			echo "PASS"
		else 
			echo "FAIL" >> ./htmlFiles/contrastFinderTest.html
			echo "FAIL"
		fi

		## Close Row and Cell for the test in the HTML page 	##
		echo "</td></tr>" >> ./htmlFiles/contrastFinderTest.html

		echo "<tr><td colspan="6">" >> ./htmlFiles/contrastFinderTest.html
		(sed '6q;d' $file) >> ./htmlFiles/contrastFinderTest.html
		echo "</td></tr>" >> ./htmlFiles/contrastFinderTest.html




	#	For dramatic effect
	#sleep .5

done

rm -r org
rm -r Project362
#####################################################################
#
#		END OF LOOP
#
#####################################################################

#-------------------------------------------------------------------#

#####################################################################
#
#		HTML OUTPUT SCRIPTS
#
#####################################################################

echo "</tbody> </table></div> </section>" >> ./htmlFiles/contrastFinderTest.html

echo "Generating output HTML file"
#output results of test in html format
firefox ./htmlFiles/contrastFinderTest.html 

#give page time to render 
sleep 1

#then remove page
rm ./htmlFiles/contrastFinderTest.html

exit