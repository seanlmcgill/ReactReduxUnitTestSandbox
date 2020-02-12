using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactReduxUnitTestSandbox.Models;
using ReactReduxUnitTestSandbox.Services;

namespace ReactReduxUnitTestSandbox.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _todoService;

        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        public IEnumerable<TodoItem> Get()
        {
            return _todoService.GetTodoItems();
        }
    }
}