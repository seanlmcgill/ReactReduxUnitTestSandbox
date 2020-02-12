using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxUnitTestSandbox.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Completed { get; set; }
        public string DueDate { get; set; }
    }
}
