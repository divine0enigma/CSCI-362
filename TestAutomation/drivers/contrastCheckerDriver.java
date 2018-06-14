package Project362;
import org.opens.utils.contrastchecker.ContrastChecker;
import java.awt.Color;

public class contrastCheckerDriver{

	
	public static void main(String[] args){
	
	//	TEST INPUT VARIABLES
	/*	
	System.out.print("Java Test Output: ");

	if (args.length > 0){
		System.out.println(args[0]);
	}
	else{ System.out.println("Did Not Run"); }
	*/
	//	END TEST
	

	// PARSING ARGUMENTS
	String[] inputs = args[0].split(" ");
	/*
	System.out.println("input 0 = " + inputs[0]);
	System.out.println("input 1 = " + inputs[1]);
	System.out.println("input 2 = " + inputs[2]);
	System.out.println("input 3 = " + inputs[3]);
	System.out.println("input 4 = " + inputs[4]);
	System.out.println("input 5 = " + inputs[5]);
	*/
	int[] colorValues = new int[6];

	// EXCEPTION HANDELING
	
	if(inputs.length != 6){
			//System.out.println(args.length);
			System.out.println("NON 6 NUBMER OF ARGUMENTS PASSED");
		}

	// MAIN OPERATIONS

	else{

		try{
		for(int i = 0; i < 6; i++){
			colorValues[i] = Integer.parseInt(inputs[i]);
		}
		
		Color fgColor = new Color(colorValues[0], colorValues[1], colorValues[2]);
		Color bgColor = new Color(colorValues[3], colorValues[4], colorValues[5]);
		double instance =  ContrastChecker.getConstrastRatio(fgColor, bgColor);
		//double result = instance.getContrastRatio(bgColor, fgColor);
		System.out.printf("Ratio = %.3f", instance);
		}
		catch(Throwable e){

			System.out.println("Exception: " + e);

		}

	}
	}
	



	

}
