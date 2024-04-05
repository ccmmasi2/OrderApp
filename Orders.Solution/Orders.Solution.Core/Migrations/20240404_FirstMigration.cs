﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace Orders.Solution.Core.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CATEGORIES",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CATEGORIES", x => x.ID);
                    table.UniqueConstraint("UQ_CATEGORIES_NAME", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "IDENTIFICATIONTYPES",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(4)", maxLength: 4, nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IDENTIFICATIONTYPES", x => x.ID);
                    table.UniqueConstraint("UQ_IDENTIFICATIONTYPES_NAME", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "CUSTOMERS",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Identification = table.Column<double>(type: "numeric(18)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    BirthDay = table.Column<DateTime>(type: "date", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(50)", maxLength: 100, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    IdIdentificationType = table.Column<int>(type: "int", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CUSTOMERS", x => x.ID);
                    table.UniqueConstraint("UQ_CUSTOMERS_IDENTIFICATION", x => x.Identification);
                    table.UniqueConstraint("UQ_CUSTOMERS_EMAIL", x => x.Email);
                    table.ForeignKey(
                        name: "FK_CUSTOMERS_IDENTIFICATIONTYPES",
                        column: x => x.IdIdentificationType,
                        principalTable: "IDENTIFICATIONTYPES",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PRODUCTS",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    IdCategory = table.Column<int>(type: "int", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PRODUCTS", x => x.ID);
                    table.UniqueConstraint("UQ_PRODUCTS_NAME", x => x.Name);
                    table.ForeignKey(
                        name: "FK_PRODUCTS_CATEGORIES",
                        column: x => x.IdCategory,
                        principalTable: "CATEGORIES",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "STOCK",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Qty = table.Column<int>(type: "int", nullable: false),
                    IdProduct = table.Column<int>(type: "int", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_STOCK", x => x.ID);
                    table.UniqueConstraint("UQ_STOCK_IDPRODUCT", x => x.IdProduct);
                    table.ForeignKey(
                        name: "FK_STOCK_PRODUCTS",
                        column: x => x.IdProduct,
                        principalTable: "PRODUCTS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ORDERHEADERS",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderDate = table.Column<DateTime>(type: "date", nullable: false),
                    IdCustomer = table.Column<int>(type: "int", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ORDERHEADERS", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ORDERHEADERS_CUSTOMERS",
                        column: x => x.IdCustomer,
                        principalTable: "CUSTOMERS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ORDERDTLS",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Qty = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<double>(type: "numeric(18,2)", nullable: false),
                    IdOrderHeader = table.Column<int>(type: "int", nullable: false),
                    IdProduct = table.Column<int>(type: "int", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ORDERDTLS", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ORDERDTLS_ORDERHEADERS",
                        column: x => x.IdOrderHeader,
                        principalTable: "ORDERHEADERS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ORDERDTLS_PRODUCTS",
                        column: x => x.IdProduct,
                        principalTable: "PRODUCTS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CUSTOMERS_IDENTIFICATION",
                table: "CUSTOMERS",
                column: "IDENTIFICATION"); 

            migrationBuilder.CreateIndex(
                name: "IX_PRODUCTS_NAME",
                table: "PRODUCTS",
                column: "NAME");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CATEGORIES");

            migrationBuilder.DropTable(
                name: "IDENTIFICATIONTYPES");

            migrationBuilder.DropTable(
                name: "CUSTOMERS");

            migrationBuilder.DropTable(
                name: "PRODUCTS");

            migrationBuilder.DropTable(
                name: "STOCK");

            migrationBuilder.DropTable(
                name: "ORDERHDRS");

            migrationBuilder.DropTable(
                name: "ORDERDTLS");
        }
    }
}
