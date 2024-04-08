namespace Orders.Solution.Core.Models
{
    public class OrderInformation
    {
        public int ID { get; set; }
        public DateTime OrderDate { get; set; }
        public string IdentificationType { get; set; }
        public long Identification { get; set; }
        public string CompleteName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string ShippingAddress { get; set; }
        public int TotalQty { get; set; }
        public long TotalPrice { get; set; } 
    }
}
