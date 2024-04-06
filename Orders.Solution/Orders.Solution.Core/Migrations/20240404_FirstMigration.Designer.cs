using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Orders.Solution.Core.Data;

namespace Orders.Solution.Core.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20240404_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);


            modelBuilder.Entity("Orders.Solution.Core.Models.CategoryDTO", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                b.Property<string>("NAME")
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnType("nvarchar(20)");

                b.HasKey("ID");

                b.ToTable("CATEGORIES");
            });


            modelBuilder.Entity("Orders.Solution.Core.Models.IdentificationTypeDTO", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                b.Property<string>("NAME")
                    .IsRequired()
                    .HasMaxLength(4)
                    .HasColumnType("nvarchar(4)");

                b.HasKey("ID");

                b.ToTable("IDENTIFICATIONTYPES");
            });


            modelBuilder.Entity("Orders.Solution.Core.Models.CustomerDTO", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                b.Property<int>("IDENTIFICATION")
                    .IsRequired()
                    .HasColumnType("double(18)");

                b.Property<string>("NAME")
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnType("nvarchar(50)");

                b.Property<string>("LASTNAME")
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnType("nvarchar(50)");

                b.Property<DateTime>("BIRTHDAY")
                    .IsRequired()
                    .HasColumnType("Date");

                b.Property<string>("EMAIL")
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnType("nvarchar(100)");

                b.Property<string>("PHONENUMBER")
                    .HasMaxLength(50)
                    .HasColumnType("nvarchar(50)");

                b.Property<int>("IDENTIFICATIONTYPEID")
                    .IsRequired()
                    .HasColumnType("int");

                b.HasKey("ID");

                b.HasIndex("IDENTIFICATION");

                b.ToTable("CUSTOMERS");
            });


            modelBuilder.Entity("Orders.Solution.Core.Models.ProductDTO", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                b.Property<string>("NAME")
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnType("nvarchar(50)");
                 
                b.Property<int>("CATEGORYID")
                    .IsRequired()
                    .HasColumnType("int");

                b.HasKey("ID");

                b.HasIndex("NAME");

                b.ToTable("PRODUCTS");
            });


            modelBuilder.Entity("Orders.Solution.Core.Models.StockDTO", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                b.Property<int>("QTY")
                    .IsRequired()
                    .HasColumnType("int");

                b.Property<int>("PRODUCTID")
                    .IsRequired()
                    .HasColumnType("int");

                b.HasKey("ID");

                b.ToTable("STOCK");
            });


            modelBuilder.Entity("Orders.Solution.Core.Models.StockDTO", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                b.Property<int>("QTY")
                    .IsRequired()
                    .HasColumnType("int");

                b.Property<int>("PRODUCTID")
                    .IsRequired()
                    .HasColumnType("int");

                b.HasKey("ID");

                b.ToTable("STOCK");
            });


            modelBuilder.Entity("Orders.Solution.Core.Models.OrderHdrDTO", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                b.Property<DateTime>("ORDERDATE")
                    .IsRequired()
                    .HasColumnType("Date");

                b.Property<int>("CUSTOMERID")
                    .IsRequired()
                    .HasColumnType("int");

                b.HasKey("ID");

                b.ToTable("ORDERHDRS");
            });


            modelBuilder.Entity("Orders.Solution.Core.Models.OrderDtlDTO", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                b.Property<int>("QTY")
                    .IsRequired()
                    .HasColumnType("int");

                b.Property<int>("PRICE")
                    .IsRequired()
                    .HasColumnType("double(18,2)");

                b.Property<int>("ORDERHEADERID")
                    .IsRequired()
                    .HasColumnType("int");

                b.Property<int>("PRODUCTID")
                    .IsRequired()
                    .HasColumnType("int");

                b.HasKey("ID");

                b.ToTable("ORDERDTLS");
            });

            base.BuildTargetModel(modelBuilder);
        }
    }
}
