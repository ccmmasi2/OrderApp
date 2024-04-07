
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    [Table("PRODUCTS")]
    public class ProductDTO
    {
        [Key]
        public int ID { get; set; }


        [Column("NAME"), MaxLength(50), Required]
        public string Name { get; set; }


        [Column("DESCRIPTION"), MaxLength(4000)]
        public string Description { get; set; }


        [Column("PRODUCTCODE"), MaxLength(10), Required]
        public string ProductCode { get; set; }


        [Column("PRICE"), Required]
        public long Price { get; set; }


        [ForeignKey("CATEGORIES")]
        public int CategoryId { get; set; }

        public virtual CategoryDTO Category { get; set; }
    }
}
