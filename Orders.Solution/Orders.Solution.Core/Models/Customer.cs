using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Orders.Solution.Core.Models
{
    public class Customer
    {
        [Key]
        public int ID { get; set; }


        [Required(ErrorMessage = "Required field")]
        public double Identification { get; set; }


        [Required(ErrorMessage = "Required field")]
        [MaxLength(50, ErrorMessage = "The length of the field should be less than 50")]
        public string Name { get; set; }


        [Required(ErrorMessage = "Required field")]
        [MaxLength(50, ErrorMessage = "The length of the field should be less than 50")]
        public string LastName { get; set; }


        [Required(ErrorMessage = "Required field")]
        [DataType(DataType.Date)]
        public DateTime BirthDate { get; set; }


        [Required(ErrorMessage = "Required field")]
        [MaxLength(100, ErrorMessage = "The length of the field should be less than 100")]
        public string Email { get; set; }


        [MaxLength(50, ErrorMessage = "The length of the field should be less than 50")]
        public string PhoneNumber { get; set; }


        public int IdIdentificationType { get; set; }
        [ForeignKey("IdIdentificationType")]
        public IdentificationType IdentificationType { get; set; }
    }
}
