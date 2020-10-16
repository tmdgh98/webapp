public class Test{
    public static void main(String[] args){
        System.out.println("Java Sample");
        
        int[][] regAry = new int[5][5];
        int cnt = 1;

        for(int i = 0 ; i<5; i++){
            cnt=0;
            for(int j =0; j<5; j++){                
                regAry[i][j] = cnt++;
            }
        }

        for(int i = 0 ; i<5; i++){
            
            for(int j =0; j<5; j++){        
                System.out.printf("%3d",regAry[j][i]);
            }
            System.out.println("");
        }

        
    }
}