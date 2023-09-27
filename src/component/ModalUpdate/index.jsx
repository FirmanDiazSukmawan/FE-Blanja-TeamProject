import React from 'react';

const ModalUpdate = () => {

  return (
    <>
      <div className="modal fade" tabindex="-1" aria-labelledby="updateLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateLabel">
                Update Product
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
                <button type="submit" className="btn btn-success">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUpdate;
