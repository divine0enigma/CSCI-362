

package Project362;
import org.opens.utils.colorconvertor.ColorConverter;
import java.awt.Color;

public class rgb2HexDriver{

	
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
	
	//System.out.println("input 0 = " + inputs[0]);
	//System.out.println("input 1 = " + inputs[1]);
	//System.out.println("input 2 = " + inputs[2]);
	
	int[] colorValues = new int[3];

	// EXCEPTION HANDELING
	
	if(inputs.length != 3){
			//System.out.println(args.length);
			System.out.println("NON 3 NUBMER OF ARGUMENTS PASSED");
		}

	// MAIN OPERATIONS

	else{

		try{
		for(int i = 0; i < 3; i++){
			colorValues[i] = Integer.parseInt(inputs[i]);
		}
		
		Color color = new Color(colorValues[0], colorValues[1], colorValues[2]);
		
		System.out.printf("Hex Value = " + ColorConverter.rgb2Hex(color));

		}
		catch(Throwable e){

			System.out.println("Exception: " + e);

		}

	}

	
	//Color bgColor = new Color(2, 100, 200);
	//System.out.println("Color Object = " + bgColor);

	}

}
