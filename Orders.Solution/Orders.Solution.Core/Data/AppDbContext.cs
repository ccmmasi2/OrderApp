using Microsoft.EntityFrameworkCore;
using Orders.Solution.Core.Models;
using System.Reflection;

namespace Orders.Solution.Core.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        { }

        public DbSet<CategoryDTO> Categories { get; set; }
        public DbSet<IdentificationTypeDTO> IdentificationTypes { get; set; }
        public DbSet<CustomerDTO> Customers { get; set; }
        public DbSet<ProductDTO> Products { get; set; }
        public DbSet<StockDTO> Stock { get; set; }
        public DbSet<OrderHeaderDTO> OrderHeaders { get; set; }
        public DbSet<OrderDtlDTO> OrderDtls { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}

