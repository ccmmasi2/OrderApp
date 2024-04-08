namespace Orders.Solution.Core.Models
{
    public class OrderRequest
    {
        public List<ProductDTO> Products { get; set; }
        public CustomerDTO Customer { get; set; }
        public string ShippingAddress { get; set; } 
    }
}
