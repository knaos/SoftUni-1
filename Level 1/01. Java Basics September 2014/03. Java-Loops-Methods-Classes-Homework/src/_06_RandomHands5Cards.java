import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;


public class _06_RandomHands5Cards {

	public static void main(String[] args) {
		
		Scanner input = new Scanner (System.in);
		System.out.print("Enter number of hands: ");
		int n = input.nextInt();
		
		for (int i = 0; i < n; i++) {
			System.out.println(generateHand());
		}				
	}
	
	private static String generateHand(){
		
		ArrayList<String> deck = generateCards();
		String hand = "";		
		Random rnd = new Random();
		
		for (int i = 0; i < 5; i++) {
			int rndIndex = rnd.nextInt(deck.size());		
			hand += " " + deck.get(rndIndex);
			deck.remove(rndIndex);
		}
				
		return hand;
	}

	private static ArrayList<String> generateCards (){
		String[] faces = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" };
		char[] suits = { '\u2663', '\u2666', '\u2665', '\u2660' };
		ArrayList<String> cards = new ArrayList<String>();
			
		for (int i = 0; i < faces.length; i++) {
			for (int j = 0; j < suits.length; j++) {
				cards.add(faces[i] + suits[j]);
			}
		}
		
		return cards;
	}
}
