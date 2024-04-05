using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    [Table("IDENTIFICATIONTYPES")]
    public class IdentificationTypeDTO
    {
        [Key]
        public int ID { get; set; }


        [Column("NAME"), MaxLength(4), Required]
        public string Name { get; set; }
    }
}
