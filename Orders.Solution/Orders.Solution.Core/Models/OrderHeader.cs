using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    public class OrderHeader
    {
        [Key]
        public int ID { get; set; }


        [Required(ErrorMessage = "Required field")]
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }


        public int IdCustomer { get; set; }
        [ForeignKey("IdCustomer")]
        public Customer Customer { get; set; }
    }
}
