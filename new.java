class employee{
    String name;
    int empId;
    String department;
    double basicSalary;
    employee(){
        double HRA=calculateHRA(basicSalary);
        double DA=calculateDA(basicSalary);
        double GrossSalary=calculateGrossSalary(basicSalary,DA,HRA);
        
    }
    double calculateHRA(double basicSalary){
        return basicSalary*(0.2);
    }
    double calculateDA(double basicSalary){
        return basicSalary*(0.1);
    }
    double calculateGrossSalary(double basicSalary,double DA,double HRA){
        return basicSalary+DA+HRA;
    }
    void displayDetails(){
        System.out.println("Employee ID      : "+this.name);
    }
    
}
class Main {
    public static void main(String[] args) {
        employee e1=new employee();
        System.out.println(e1);
    }
}