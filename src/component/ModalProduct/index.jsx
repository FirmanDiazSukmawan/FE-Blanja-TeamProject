import React from 'react';


const ModalProduct = () => {
  return (
    <>
      <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#Create">
        Create Product
      </button>

      <div className="modal fade" id="Create" tabindex="-1" aria-labelledby="CreateLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="CreateLabel">
                Create Product
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div className="modal-body">

                <div className="mb-3 w-100">
                  <input className="form-control" type="text" placeholder="name" name="name" />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="price" name="price" />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="size" name="size" />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="color" name="color" />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="stock" name="stock" />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="file" placeholder="photo" name="photo" />
                </div>

                <div className="mb-3">
                  <input className="form-control" type="text" placeholder="description" name="description" />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProduct;
